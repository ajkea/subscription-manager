// var dataSubscriptions = { 'accounts': ['Werner', 'Isolde', 'Gregory'], 'topics': ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running'], 'accountSubscribedTopic': [{ 'topic': 'Soccer', 'Account': 'Simpson' }, { 'topic': 'Soccer', 'Account': 'Simpson' }] }

var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []


var showAccountList = () => {

    var accountList = document.getElementById('accountList')

    accounts.forEach(element => {
        let accountItem = document.createElement('li')
        accountItem.appendChild(document.createTextNode(element))
        accountList.appendChild(accountItem)
    });
}

showAccountList()