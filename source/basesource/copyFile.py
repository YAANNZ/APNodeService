
import shutil

#shutil.rmtree('/Users/Z/Documents/WorkRelated/Projects/sgcc/code/sgcis/platforms/ios/www')
#shutil.copytree('/Users/Z/Documents/WorkRelated/Projects/sgcc/www(vue)/sgcism_dist_code/www', "/Users/Z/Documents/WorkRelated/Projects/sgcc/code/sgcis/platforms/ios/www", ignore=shutil.ignore_patterns('cordova.js'))
#shutil.copy('/Users/Z/Documents/WorkRelated/Projects/sgcc/www(vue)/cordova.js', '/Users/Z/Documents/WorkRelated/Projects/sgcc/code/sgcis/platforms/ios/www')

shutil.rmtree('./source/basesource/sgcis/platforms/ios/www')
shutil.copytree('./source/upload/www', "./source/basesource/sgcis/platforms/ios/www", ignore=None)
