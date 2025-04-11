FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ./src/TodoApi/TodoApi.csproj ./TodoApi/
RUN dotnet restore ./TodoApi/TodoApi.csproj
COPY ./src/TodoApi/ ./TodoApi/
WORKDIR /src/TodoApi
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TodoApi.dll"]
