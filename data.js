// var dataSubscriptions = { 'accounts': ['Werner', 'Isolde', 'Gregory'], 'topics': ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running'], 'accountSubscribedTopic': [{ 'topic': 'Soccer', 'Account': 'Simpson' }, { 'topic': 'Soccer', 'Account': 'Simpson' }] }

var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []

showList = (type, listElementId) => {
    var list = document.getElementById(listElementId)

    type.forEach(element => {
        let listItem = document.createElement('li')
        listItem.appendChild(document.createTextNode(element))
        list.appendChild(listItem)
    });
}

showList(accounts,'accountList')
showList(topics,'topicList')