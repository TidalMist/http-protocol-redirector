> [!IMPORTANT]
> When official redirect repo become, this repo will probably be disabled.
> 
> For now use.
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=
```
Examples
### obtainium://app/
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://app/%7B%22id%22:%22dev.patrickgold.florisboard.beta%22,%22url%22:%22https://github.com/florisboard/florisboard%22,%22author%22:%22florisboard%22,%22name%22:%22FlorisBoard%20Beta%22,%22preferredApkIndex%22:0,%22additionalSettings%22:%22%7B%5C%22includePrereleases%5C%22:true,%5C%22fallbackToOlderReleases%5C%22:true,%5C%22filterReleaseTitlesByRegEx%5C%22:%5C%22%5C%22,%5C%22filterReleaseNotesByRegEx%5C%22:%5C%22%5C%22,%5C%22verifyLatestTag%5C%22:false,%5C%22dontSortReleasesList%5C%22:false,%5C%22trackOnly%5C%22:false,%5C%22versionDetection%5C%22:%5C%22standardVersionDetection%5C%22,%5C%22apkFilterRegEx%5C%22:%5C%22%5C%22,%5C%22autoApkFilterByArch%5C%22:true,%5C%22appName%5C%22:%5C%22%5C%22,%5C%22exemptFromBackgroundUpdates%5C%22:false,%5C%22skipUpdateNotifications%5C%22:false,%5C%22about%5C%22:%5C%22%5C%22%7D%22%7D
```
or
>```
>https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://app/{"id":"dev.patrickgold.florisboard.beta","url":"https://github.com/florisboard/florisboard","author":"florisboard","name":"FlorisBoard%20Beta","preferredApkIndex":0,"additionalSettings":"{\"includePrereleases\":true,\"fallbackToOlderReleases\":true,\"filterReleaseTitlesByRegEx\":\"\",\"filterReleaseNotesByRegEx\":\"\",\"verifyLatestTag\":false,\"dontSortReleasesList\":false,\"trackOnly\":false,\"versionDetection\":\"standardVersionDetection\",\"apkFilterRegEx\":\"\",\"autoApkFilterByArch\":true,\"appName\":\"\",\"exemptFromBackgroundUpdates\":false,\"skipUpdateNotifications\":false,\"about\":\"\"}"}
>```
>If contains spaces, remove or replace with %20 FlorisBoard%20Beta FlorisBoardBeta

#### Shorten link
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://app/{"id":"dev.patrickgold.florisboard.beta","url":"https://github.com/florisboard/florisboard","author":"florisboard","name":"FlorisBoard","additionalSettings":"{\"includePrereleases\":true}"}
```
or without additional settings
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://app/{"id":"dev.patrickgold.florisboard","url":"https://github.com/florisboard/florisboard","author":"florisboard","name":"FlorisBoard"}
```
### obtainium://add/
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://add/https://github.com/florisboard/florisboard
```
without https://
```
https://tidalmist.github.io/obtainium-http-protocol-redirector?r=obtainium://add/github.com/florisboard/florisboard
```
##### why fork https://github.com/ImranR98/Obtainium/issues/1326
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
