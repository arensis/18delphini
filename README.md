<center>
    <img src="./assets//images/ogg-imag.png" style="width: 500px; height: auto">  
</center>

## Deploy into docker container

```bash
sudo sh deploy.sh
```

The script will stop the container if exists with the same name and will create and run a new one using linked root folder files. By this way you can work on the files and will be loaded your changes in the docker container that expose a web apache server on port 80.

This is useful to test the web on a mobile phone open the web with the ip address of your working computer.