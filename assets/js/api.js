async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/SabrinaPaschini/potifolio/mainassets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

