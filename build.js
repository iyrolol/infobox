import fs from 'fs/promises'
import path from 'path'
import ejs from 'ejs'
import yaml from 'js-yaml' 

const pkg = JSON.parse(await fs.readFile('package.json', 'utf-8'))


async function buildProfile() {
    let dateObject = new Date();
    let date = ("0" + dateObject.getDate()).slice(-2);
    let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
    let year = dateObject.getFullYear();
    const raw = await fs.readFile('data/user.yaml', 'utf-8')
    
    let profile = yaml.load(raw)
    profile = {...profile, update_at: year + "-" + month + "-" + date, version: pkg.version }
    console.log(profile)
    const html = await ejs.renderFile('templates/profile.ejs', profile)
    await fs.writeFile('public/index.html', html)
    console.log('Built index.html')
  }

async function main() {
  const files = await fs.readdir('data')
  await buildProfile()
}

main()

