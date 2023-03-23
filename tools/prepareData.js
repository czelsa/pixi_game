const fs = require('fs');
const yaml = require('yaml');

const input = fs.readFileSync('food.metadata', 'utf8');

const data = yaml.parse(input);

const OBJECTS = [];

const { fileIDToRecycleName, spriteSheet } = data.TextureImporter
for (const name of Object.values(fileIDToRecycleName)) {
  const sprite = spriteSheet.sprites.find((s) => s.name === name);
  
  if (!sprite) continue;
  
  OBJECTS.push({
    name: sprite.name,
    x: sprite.rect.x,
    y: sprite.rect.y,
    width: sprite.rect.width,
    height: sprite.rect.height,
  });
}

fs.writeFileSync('objectsData.json', JSON.stringify(OBJECTS, null, 2));