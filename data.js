// var dataSubscriptions = { 'accounts': ['Werner', 'Isolde', 'Gregory'], 'topics': ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running'], 'accountSubscribedTopic': [{ 'topic': 'Soccer', 'Account': 'Simpson' }, { 'topic': 'Soccer', 'Account': 'Simpson' }] }

var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []

showList = (type, listElementId) => {
    // var list = document.getElementById(listElementId)

    type.forEach(element => {
        createListItem(listElementId, element)

        // let listItem = document.createElement('li')
        // var documentFragment = document.createDocumentFragment();
        // documentFragment.appendChild(listItem);

        // let listItemButton = document.createElement('button')
        // listItemButton.innerText = "subscribe"
        // console.log(listItemButton)
        // listItem.appendChild(document.createTextNode(element))
        // listItem.appendChild(listItemButton)
        // list.appendChild(listItem)
    });
}

addSubscription = () => {
    accountTopicSubscriptions.push(["Werner", "Soccer"])
    let accountTopicSubscriptionsList = document.getElementById('accountTopicSubscriptionsList')



    let accountTopicSubscriptionsListItem = document.createElement('li')
    accountTopicSubscriptionsListItem.appendChild(document.createTextNode('zwavel', 'zuur'))
    accountTopicSubscriptionsList.appendChild(accountTopicSubscriptionsListItem)

    console.log(accountTopicSubscriptions)
}

createListItem = (listElementId, data) => {

    let list = document.getElementById(listElementId)

    let listItem = document.createElement('li')
    let documentFragment = document.createDocumentFragment();
        documentFragment.appendChild(listItem);

        let listItemButton = document.createElement('button')
        listItemButton.innerText = "subscribe"
        console.log(listItemButton)
        listItem.appendChild(document.createTextNode(data))
        listItem.appendChild(listItemButton)
        list.appendChild(listItem)
}

showList(accounts, 'accountList')
showList(topics, 'topicList')
showList(accountTopicSubscriptions, 'accountTopicSubscriptionsList')