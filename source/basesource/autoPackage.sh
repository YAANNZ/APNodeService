
#DATE=`date +%Y%m%d_%H%M`

#cd ./source/basesource/sgcis

#svn update


xcodebuild -workspace /Users/Z/Documents/Learning/nodejs/SgcisAutoPackage/source/basesource/sgcis/platforms/ios/sgcis.xcworkspace -scheme sgcis -destination generic/platform=iOS archive -configuration Release ONLY_ACTIVE_ARCH=NO -archivePath /Users/Z/Documents/Learning/nodejs/SgcisAutoPackage/source/package/xcarchive/sgcis

xcodebuild -exportArchive -archivePath /Users/Z/Documents/Learning/nodejs/SgcisAutoPackage/source/package/xcarchive/sgcis.xcarchive -exportPath /Users/Z/Documents/Learning/nodejs/SgcisAutoPackage/source/package/ipa -exportOptionsPlist /Users/Z/Documents/Learning/nodejs/SgcisAutoPackage/source/package/exportOptionsPlist/exportOptionsPlist.plist


#fir login -T xxxxxxxxxxxxxxxxxxxxx

#fir publish /Users/xxx/AutoPackage/ipa/ipa_$DATE/xxx.ipa
