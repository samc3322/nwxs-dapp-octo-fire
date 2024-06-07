const fs = require("fs")

async function main() {
    const NwxsNFTFactory = await ethers.getContractFactory("NwxsNFT")
    const NwxsNFT = await NwxsNFTFactory.deploy()

    await NwxsNFT.deployed()

    console.log("NwxsNFT deployed to:", NwxsNFT.address)

    const data = {
        address: NwxsNFT.address,
        abi: JSON.parse(NwxsNFT.interface.format("json")),
    }

    //writes the ABI and address to the NwxsNFT.json
    fs.writeFileSync("./src/NwxsNFT.json", JSON.stringify(data))
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
