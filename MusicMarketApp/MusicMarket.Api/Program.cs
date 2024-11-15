using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MusicMarket.Api.MappingProfile;
using MusicMarketplace.Domain.Repository;
using MusicMarketplace.Domain;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("app", policy =>
    {
        var clientAddresses = builder.Configuration.GetSection("ClientAddresses").Get<Dictionary<string, string>>();
        if (clientAddresses == null || !clientAddresses.Any())
        {
            throw new Exception("Секция 'ClientAddresses' не найдена или пуста в конфигурации appsettings.json.");
        }
        policy.WithOrigins(clientAddresses.Values.ToArray())
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var mapperConfig = new MapperConfiguration(config => config.AddProfile(new MappingProfile()));
var mapper = mapperConfig.CreateMapper();

builder.Services.AddSingleton(mapper);
builder.Services.AddSingleton<IMusicMarketRepository, MusicMarketRepository>();

builder.Services.AddDbContextFactory<MusicMarketDbContext>(options =>
options.UseMySQL(builder.Configuration.GetConnectionString("MusicMarket")!));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
builder.Services.AddSwaggerGen(c =>
{
    c.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("app");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
