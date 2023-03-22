# EtherWallet

## How to run?

1. Add `.env` file with RPC_ADDRESS. Use this content for testing with testnet:

```SHELL
RPC_ADDRESS=https://rpc.ankr.com/eth_goerli
```

2. Install dependencies with: `yarn`
3. (For iOS) Install pods: `npx pod-install`
4. Execute the app: `yarn ios` or `yarn android`

## How to use?

You can import any ethereum wallet using the seed and you will see the balance and address of your account.

## How to Deploy?

- For Google Play
  Create a signed and optimized APK file to publish to the store. This file must pass quality tests and comply with Google Play policies.
  Create a new app listing in the Google Play console and fill in the necessary details such as app name, description, graphics, and pricing.
  Upload the APK file to the Google Play console and add additional information such as screenshots, videos, and app details.

- For Apple Store
  Create a developer account on the Apple Developer Portal.
  Create a signed and optimized IPA file to publish to the store. This file must pass quality tests and comply with Apple policies.
  Create a new app registration on the Apple Developer Portal and fill in the necessary details, such as the app name, description, graphics, and pricing.
  Upload the IPA file to the Apple Developer Portal and add additional information such as screenshots, videos, and application details.
  Configure the privacy policy of the application.
  Launch the app on the Apple App Store.
  In my personal experience, the App Store publishing process can be a bit more demanding due to Apple's stricter policies. In addition, it may take a little longer for the app to be approved by Apple than in the Google Play Store. It is also important to note that each store has its own policies and quality requirements that must be met to ensure that the app is published successfully.

Have in count, this app cannot be submitted to the apple store, because it having a "upcoming" feature, so wee need to remove the button to sent to the store until we have only completed features.

## Security

- Retrieve API keys/secrets securely:
  If possible, retrieve the API keys/secrets from a server instead of storing them in the app.
  Use HTTPS protocol for all API requests to ensure secure communication with the server.
  Consider using an authentication mechanism, such as OAuth, to securely obtain the API keys/secrets.

- Store API keys/secrets securely:
  Do not hardcode the API keys/secrets in the source code. Instead, store them in a configuration file or environment variables.
  Use a secure storage mechanism, such as the Keychain on iOS or the Keystore on Android, to store the API keys/secrets.
  Consider using encryption to protect the API keys/secrets in case the device is compromised

- Handle API keys/secrets securely:
  Only use the API keys/secrets for the intended purpose and avoid exposing them to third-party libraries or services.
  Consider limiting the API key's permissions to only what is necessary for the app to function properly.
  Do not log the API keys/secrets or print them to the console, as this could expose them to attackers.

## Screenshots and video

<img src="https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_0.png" alt="Screenshot" width="300">

![Screenshot](https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_0.png)
![Screenshot](https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_1.png)
![Screenshot](https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_2.png)
![Screenshot](https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_3.png)
![Screenshot](https://raw.githubusercontent.com/javi10823/etherwallet/main/README_FILES/screen_4.png)

Video:
https://drive.google.com/file/d/1n3yJRyJ1Ecgjn25mTfiNe0eB7P2NI_P8/view?usp=share_link
