

let Guest_List :string[] = ['Kamran tassori','Daniyal nagori','Zia khan'];

//for(let i=0; i<Guest_List.length; i++){

//console.log('Dear Mr.' +Guest_List[i] + ',\n\nIt is  our  pleasure to invite you in our party.\n\nThank you!\n\n')

//}
let absent_Guest :string ='Daniyal nagori';
let new_Guest :string ='Ameen alam';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){

console.log('Dear Mr.' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}
console.log(`Mr ${absent_Guest}is not coming to the party.`)

console.log('Good New!we find Big Table so we are inviting 3 more guest.')

Guest_List.unshift('hamza syed');
Guest_List.splice(2 ,0, 'Qasim');
Guest_List.push('Imran ali');

for(let i=0; i<Guest_List.length; i++){

console.log('Dear Mr.' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\n')

}
