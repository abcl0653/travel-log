# Log Entry

* Title
* Description
* Comments
* Rating - scale of 1 - 10
* Image - Text - URL
* Start Date - DateTime
* End Date - DateTime
* Latitude - Number
* Longitude - Number
* Created At - DateTime
* Updated At - DateTime

## Get started with mongoDB

<https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/>

* the configuration file (/usr/local/etc/mongod.conf)
* the log directory path (/usr/local/var/log/mongodb)
* the data directory path (/usr/local/var/mongodb)

```bash
# Useful command
mongod --config /usr/local/etc/mongod.conf --fork

ps aux | grep -v grep | grep mongod
/usr/local/var/log/mongodb/mongo.log

```
