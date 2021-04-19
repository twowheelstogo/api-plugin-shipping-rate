

export default async function startup(context){
    const {collections} = context;
    const {Shipping} = collections;
    await Shipping.insertOne({

    })
}