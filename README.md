# RICOCALL

A concept web application created by Igor Trindade to make voice call using your browser

## Run development

### Server
```bash
git clone
cd ricocall/server
cp .env.example .env
npm install
npm run dev
```

Before running the server you may need to setup .env files with Twilio and Mailgun credentials (in case of sending the recover password)

### Application (SPA)
```bash
git clone
cd ricocall/frontend
npm install
npm run dev
```

### Test Server
```bash
cd server
npm run test
```

### Test FrontEnd
```bash
cd frontend
npm run test
```

## Build

```bash
cd frontend
npm run build
```

Publish the changes pointing your server to `server/public`

You may need `pm2` or `supervisor` to run the application in production


## Author


* **Igor Trindade**
* [github.com/igortrinidad](https://github.com/igortrinidad)
* [https://igortrindade.dev](https://igortrindade.dev)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

- v1.0
  - Inicial release
  - Created server and started layout
  - Added call function between hardcoded users
  -




