#!/bin/bash
#!/build
docker build -t githubcards .

#!/run
docker run -p 5000:3000 githubcards
