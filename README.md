https://tidalmist.github.io/http-protocol-redirector/?r={"id":"dev.patrickgold.florisboard.beta","url":"https://github.com/florisboard/florisboard","author":"florisboard","name":"FlorisBoard%20Beta","preferredApkIndex":0,"additionalSettings":"{\"includePrereleases\":true,\"fallbackToOlderReleases\":true,\"filterReleaseTitlesByRegEx\":\"\",\"filterReleaseNotesByRegEx\":\"\",\"verifyLatestTag\":false,\"dontSortReleasesList\":false,\"trackOnly\":false,\"versionDetection\":\"standardVersionDetection\",\"apkFilterRegEx\":\"\",\"autoApkFilterByArch\":true,\"appName\":\"\",\"exemptFromBackgroundUpdates\":false,\"skipUpdateNotifications\":false,\"about\":\"\"}"}

i want https://intradeus.github.io/http-protocol-redirector/?r=obtainium://app/%7B%22id%22%3A%22dev.patrickgold.florisboard.beta%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fflorisboard%2Fflorisboard%22%2C%22author%22%3A%22florisboard%22%2C%22name%22%3A%22FlorisBoard%20Beta%22%2C%22preferredApkIndex%22%3A0%2C%22additionalSettings%22%3A%22%7B%5C%22includePrereleases%5C%22%3Atrue%2C%5C%22fallbackToOlderReleases%5C%22%3Atrue%2C%5C%22filterReleaseTitlesByRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22filterReleaseNotesByRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22verifyLatestTag%5C%22%3Afalse%2C%5C%22dontSortReleasesList%5C%22%3Afalse%2C%5C%22trackOnly%5C%22%3Afalse%2C%5C%22versionDetection%5C%22%3A%5C%22standardVersionDetection%5C%22%2C%5C%22apkFilterRegEx%5C%22%3A%5C%22%5C%22%2C%5C%22autoApkFilterByArch%5C%22%3Atrue%2C%5C%22appName%5C%22%3A%5C%22%5C%22%2C%5C%22exemptFromBackgroundUpdates%5C%22%3Afalse%2C%5C%22skipUpdateNotifications%5C%22%3Afalse%2C%5C%22about%5C%22%3A%5C%22%5C%22%7D%22%7D but something with encode decode. firefox gives the wrong link to obtainium, webview browser too, but chrome gives correct

# HTTP protocol redirector
[![pages-build-deployment](https://github.com/intradeus/http-protocol-redirector/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/intradeus/http-protocol-redirector/actions/workflows/pages/pages-build-deployment)

```
https://intradeus.github.io/http-protocol-redirector?r=
```

## Why 
Ever wanted to  
- redirect some users to your own software, but Slack / Discord / Google Chat / Teams said "No!"
- redirect your dev team from their PR to vscode instantly, but Github said "No !"

Then http-protocol-redirector is for you :)

No analytics, no nonsense, just 2 lines of code.

(There are no plans to add a shorter domain for now, as github.io has more chance to be alive in 10 years than my own domain.)

## How 
Simply add `https://intradeus.github.io/http-protocol-redirector?r=` in front of your own URL with your own protocol, and it'll forward it.


Let's say you have the [ms-vscode.remote-repositories](https://marketplace.visualstudio.com/items?itemName=github.remotehub) extension for vscode and want your team to open a link.

Then, neither this vscode protocol link is clickable, nor is its hyperlink version :  
- vscode://ms-vscode.remote-repositories/open?url=https://github.com/intradeus/http-protocol-redirector
- [hyperlink version](vscode://ms-vscode.remote-repositories/open?url=https://github.com/intradeus/http-protocol-redirector)

But by adding the redirector, you can make it clickable : 
- https://intradeus.github.io/http-protocol-redirector?r=vscode://ms-vscode.remote-repositories/open?url=https://github.com/intradeus/http-protocol-redirector
- [hyperlink version](https://intradeus.github.io/http-protocol-redirector?r=vscode://ms-vscode.remote-repositories/open?url=https://github.com/intradeus/http-protocol-redirector)

## Watch out
I know that there is a security reason why these companies don't allow custom protocols to be opened, but sometimes you just wanna do more with their tools. 

This is just a reminder that you should always see the content of any hyperlink you're clicking on, and you should never open something that you do not trust.

Fortunately, browsers will always ask you if you want to open something in a software, before actually opening it :)
