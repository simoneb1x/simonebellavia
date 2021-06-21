---
title: 'I made a React Password Generator'
date: '2021-06-20'
id: 'password-generator'
---

Security has always been important, but **more attention is required today in protecting your accounts.** The various data breaches now no longer allow us to use simple and identical passwords for all the services we subscribe to. It is important to use more sophisticated credentials, preferably supported by a Password Manager. Below I suggest some of them:

- [1Password](https://1password.com/)
- [Bitwarden](https://bitwarden.com/), it's open source!
- [Keepass](https://keepass.info/)
- [Lastpass](https://www.lastpass.com/it/)

Anyway, **I used this pretext to make my own Password Generator.** At first I wrote it in Python, but then wanting to publish it on my website I totally rewrote it in for React. **[You can try it here.](https://simonebellavia.com/coding-projects/password-generator)**

The approach I used is ASCII conversion [(I got my inspiration here)](https://www.studytonight.com/post/building-a-password-generator-with-javascript). Then I implemented an algorithm that randomizes the password to each generation. The User Interface is extremely simple, it allows you to choose the length of the password and to use lowercase, uppercase characters, numbers and symbols.

[The script is open source and collaborations or criticisms are more than welcome.](https://github.com/simoneb1x/simonebellavia/tree/main/pages/coding-projects) Surely the solution I have adopted will not be the most elegant or efficient, for this reason I will improve it in the future.

Hope you like it, thanks for reading this far!