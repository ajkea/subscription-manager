// var dataSubscriptions = { 'accounts': ['Werner', 'Isolde', 'Gregory'], 'topics': ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running'], 'accountSubscribedTopic': [{ 'topic': 'Soccer', 'Account': 'Simpson' }, { 'topic': 'Soccer', 'Account': 'Simpson' }] }

var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []


var showAccountList = () => {
    document.getElementById('accountList').innerHTML = ` 
<ul>
${accounts.map(element => {
        return (`<li> ${element} </li>`)
    })}
</ul>`
}
