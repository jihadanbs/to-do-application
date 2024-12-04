const hre = require("hardhat");

async function main() {
  // Mendapatkan contract factory
  const TaskToDo = await hre.ethers.getContractFactory("TaskToDo");
  // Deploy kontrak
  const taskToDo = await TaskToDo.deploy();
  // Menunggu kontrak di-deploy
  await taskToDo.deploymentTransaction().wait(1);  
  // Mendapatkan alamat kontrak
  const contractAddress = await taskToDo.getAddress();
  console.log("Contract deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });