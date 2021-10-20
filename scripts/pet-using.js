//初始化过程
var Web3 = require('web3');
var Contract = require('web3-eth-contract');

// 编译后的文件 自行定位文件修改路径
import {TokenPET} from "../artifacts/contracts/TokenPETMintable.sol/TokenPETMintable.json";
var abi = TokenPET.abi;
// 发布后合约的地址
var address = '';

// 合约发布的链网络
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// Contract.setProvider('ws://localhost:8546');

// 创建合同对象
var contract = new web3.eth.Contract(abi, address);

// 方法调用
contract.methods.totalSupply().call().then(function(totalSupply){
  console.log('totalSupply result', totalSupply) 
});

// 查询账户余额
contract.methods.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call().then(function(balanceOf){
  console.log('Before balanceOf result', balanceOf) 
});

// 调用mint方法向账户发行代币
var mint = contract.methods.mint('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 999);
// from需要是所有者，才可以向想合约申请给用户发币
mint.send({from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'}).then(function(receipt){
// var result = mint.call().then(function(receipt) {
  console.log('call result', receipt) 
  // 查询账户余额
  contract.methods.balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266').call().then(function(balanceOf){
    console.log('After balanceOf result', balanceOf) 
  });
}).catch((error, receipt) => {
  console.error('error === ', error);
  process.exit(1);
});

