# Use the .NET SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env

# Set the working directory in the container
WORKDIR /app

# Expose port 80 for HTTP traffic
EXPOSE 80
# EXPOSE 443 for HTTPS traffic (commented out)

# Copy the project files and restore dependencies
COPY ["src/Meetera.API/Meetera.API.csproj", "src/Meetera.API/"]
COPY ["src/Meetera.Application/Meetera.Application.csproj", "src/Meetera.Application/"]
COPY ["src/Meetera.Domain/Meetera.Domain.csproj", "src/Meetera.Domain/"]
COPY ["src/Meetera.Infrastructure/Meetera.Infrastructure.csproj", "src/Meetera.Infrastructure/"]
COPY ["src/Meetera.sln", "src/"]

# Restore the project dependencies
RUN dotnet restore ./src/Meetera.sln

# Copy the rest of the source files and build the application
COPY ["src/", "src/"]
WORKDIR /app/src/Meetera.API

# Publish the application in Release configuration
RUN dotnet publish -c Release -o out

# Build the production image using the ASP.NET runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build-env /app/src/Meetera.API/out ./

# Set the environment variable for the application
ENV ASPNETCORE_URLS=http://+:80
# ENV ASPNETCORE_URLS=https://+:443;http://+:80 (commented out)

# Start the application
ENTRYPOINT ["dotnet", "Meetera.API.dll"]