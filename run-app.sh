#!/bin/bash
#!/build
docker build -t githubcards .

#!/run
#docker run -p 5000:3000 githubcards
docker run -p 81:80 githubcards
