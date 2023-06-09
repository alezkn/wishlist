FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /backend-dotnet-app
COPY *.csproj .
RUN dotnet restore
COPY . .
EXPOSE 8000
CMD ["dotnet", "watch", "run", "--urls=http://localhost:8000/"]
