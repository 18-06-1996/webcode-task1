 //search
fin=document.querySelector('body')
son=document.createElement('form')

son.classList.add('searchbox')

sear=document.createElement('input')
sear.setAttribute('placeholder','Enter The Product Name')
son.append(sear)

document.createElement('br')
btn=document.createElement('button')
btn.setAttribute('onclick','clicking(this)')
btn.setAttribute('type','submit')
btn.innerText='Search'
son.append(btn)

fin.append(son)

document.createElement('br')
document.createElement('br')




url='https://makeup-api.herokuapp.com/api/v1/products.json?'

let array=[];
async function api(){
    v = fetch(url)
    out = await v
    prom = out.json()
    res = await prom
    console.log(res[0])

 for(var i of res){
    try{
       

        //patent_all
            fin=document.querySelector('body')
        //parent
            parent=document.createElement('div')
            parent.classList.add('all_data')
           
        //child
            container=document.createElement('div')
            container.classList.add('king')
            container.style.width='500px'
            container.style.display='inline-block'

        //brand
            brand_data=document.createElement('p')
            brand_data.innerText=`Name Of The Brand : ${ i.brand}`
            container.append(brand_data)
            
           // console.log(i.brand)
        //nameof the product
            name_data=document.createElement('p')
            name_data.innerText= `Name Of The Product : ${ i.name}`
            container.append(name_data)
            array.push(i.name)
           // console.log(i.name)
        //price of the product
            price_value=document.createElement('p')
            price_value.innerText=`Price Of The Product :${i.price_sign}  ${ i.price}`
            container.append(price_value)
           // console.log(i.price)
        
        //product image
            picture=document.createElement('img')
            picture.setAttribute('src',i.image_link)
            picture.style.height='100px'
            picture.style.width='100px'
            container.append(picture)
           // console.log(i.image_link)
            document.createElement('br')

        //product link
            pro_link=document.createElement('a')
            pro_link.setAttribute('href',i.product_link)  
            pro_link.innerText='Visit Here...'        
            container.append(pro_link)
          //  console.log(i.product_link)

        //description   
            descrip=document.createElement('p')
            descrip.innerText=`Description : ${i.description}`
            container.append(descrip) 
           // console.log(i.description)

            parent.append(container)
           
            fin.append(parent)

    }

      catch{
       //
    }
 }
}
api()

 console.log(array);
 