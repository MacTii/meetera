# Meetera

## Docker
```bash
# Move to the backend path
Set-Location C:\path\to\your\backend

# Build the Docker image
docker build -t your-api-image-name -f path/to/Dockerfile .

# Run the container using the image
docker run -d -p 8080:80 --name your-container-name your-api-image-name

# Check if the container is running
docker ps
```