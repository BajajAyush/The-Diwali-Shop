# The-Diwali-Shop
A Diwali Shop made using medusa framework and Next.js storefront
![Medusa Hackathon 2022](galaxy-cover-template%231.jpg)

## About
### Participants
Name - Ayush Bajaj

GitHub - https://github.com/BajajAyush

Discord - Ayush Bajaj#3468

Twitter - https://twitter.com/AyushBajaj2003

### Description

Diwali is the festival of light and happiness. It is celebrated all over India. There are a lot of items people buy to perform puja and celebrate the people. This store aims to provide all their needs at one place. 

This web storefront is made using NextJs paired with MedusaJs with Minio as a file service.

### Preview

Storefront-

https://user-images.githubusercontent.com/68808280/197382084-126e46e2-8834-40fb-8c32-8df28d81820d.mp4

Admin Panel-

https://user-images.githubusercontent.com/68808280/197382455-d865268f-000b-4ed8-bb9d-e74920bb2039.mp4

Some Screenshots-
![Screenshot 2022-10-23 140556](https://user-images.githubusercontent.com/68808280/197382620-e8dd0fcf-b7c6-42b9-96cd-c7c7cbe2081b.png)
![Screenshot 2022-10-23 140537](https://user-images.githubusercontent.com/68808280/197382621-907d5eee-b50f-4204-a34e-e2b145c1bcd6.png)
![Screenshot 2022-10-23 140511](https://user-images.githubusercontent.com/68808280/197382622-d42004a3-f6e5-4665-8757-71564a6f048d.png)
![Screenshot 2022-10-23 140450](https://user-images.githubusercontent.com/68808280/197382625-16cd2b14-6125-4750-aa25-a1da3e4d0fe1.png)

## Set up Project
### Prerequisites
Before you start with the tutorial make sure you have:

- [Node.js](https://nodejs.org/en/) v14 or greater installed on your machine
- [medusa-admin](https://github.com/myudak/vmsMedusa-admin) run `npm install;npm start`
- [medusa-server](https://github.com/myudak/vmsMedusa-server) run `npm install;npm install medusa-file-minio;npm install -g @medusajs/medusa;medusa develop`
- [minIO]download [minIO](https://min.io/docs/minio/windows/index.html) place it in parent directory run `cd ..;./minio.exe server "path directory" --address :6900 --console-address :9090`

### Install Project

Done with the pre-requisites?

Here are the steps to be taken after that :

1. Clone the repository:
```bash
git clone https://github.com/BajajAyush/The-Diwali-Shop
```

2. Change directory and install dependencies:
```bash
cd my-medusa-store
npm install
```
3.  Start the app
```bash
npm run dev
```

4. Go to minIO page in `127.1.1:9090`:

![image](https://user-images.githubusercontent.com/69108782/194758258-2b41b42f-8b69-4ec3-96bf-30a022120064.png)

5. Login with username and password:
```bash
minioadmin
```
6. Go to manage -> make accsess policy public
<br/>

![Untitled video - Made with Clipchamp](https://user-images.githubusercontent.com/69108782/194758492-d235dc80-043a-41f4-b758-371db7f28fef.gif)

<br>

7. Go to identitiy -> service account -> create service account -> make the accsess key and the secret key :

```bash
y9JD6baeMyVHOwpj
```
```bash
S4zwVBqo3oaFWuOfJ6MsK0HNCrLKMXei
```

![Untitled video - Made with Clipchamp (1)](https://user-images.githubusercontent.com/69108782/194758995-d263cf1e-d124-499c-89a3-26f6007e4eb5.gif)

Finish and see the web on :
```
http://localhost:8000/
```

## Resources

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [How to Create Services](https://docs.medusajs.com/advanced/backend/services/create-service)
- [Minio Documentation](https://min.io/docs/minio/windows/index.html)
- [Medusa Tutorial Docs](https://docs.medusajs.com/tutorial/set-up-your-development-environment/)
