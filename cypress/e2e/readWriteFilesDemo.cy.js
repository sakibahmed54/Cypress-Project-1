
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read File using fixture',function()
    
{

    cy.fixture('example.json').then((data)=>
    {
    cy.log(data.name)
    cy.log(data.email)
})
cy.log(this.test_data.name)
    
})

it('Readfile Function test',function(){

    cy.readFile('./cypress/fixtures/example.json').then((data)=>
        {
   cy.log(data.name)
    }
    )
})
it('WriteFile fuction test',function()
{
cy.writeFile('sample.txt','hello,sakib\n')
cy.writeFile('sample.txt','what are you doing?',{flag:'a+'})
})