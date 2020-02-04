// Promises

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([423, 883, 432, 974])
    }, 1000)
})

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            }
        resolve(`${ID}: ${recipe.title}`)
        }, 1500, recID)
    })
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
      setTimeout(pub => {
          const recipe = {
              title: 'Italian Pizza',
              publisher: 'Jonas'
          }
          resolve(`${pub}: ${recipe.title}`)
      }, 1500, publisher)
    })
}

async function getRecipesAW() {
    const IDs = await getIDs
    console.log(IDs)
    const recipe = await getRecipe(IDs[2])
    console.log(recipe)
    const related = await getRelated('Jonas')
    console.log(related)
}

getRecipesAW()