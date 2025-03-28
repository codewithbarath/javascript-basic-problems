let much=new Map()

much.set(1,"barath")
much.set(2,"kumar")
much.set("barathkumar","developer")
console.log(much)

console.log(much.get(3))
console.log(much.get("2"))
console.log(much.has(2))

for(key of much.keys()){
    console.log(key)
}
for (diamondrum of much.values()){
    console.log(diamondrum)
}