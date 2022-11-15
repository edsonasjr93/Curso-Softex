function computadorFactory(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

computadorFactory.prototype.toString = function computadorFactoryToString() {
    var atributos = "O computador é do tipo " + this.type +  ', possui o processador ' + this.cpu +  ', ' + this.ram + " de memória RAM e " + this.hdd + " de armazenamento no HD.";
   return atributos
};

const pc1 = new computadorFactory("8 GB", "500 GB", "AMD Ryzen 5 3600 3.6GHz", "PC");
console.log(pc1.toString())
const server1 = new computadorFactory("16 GB", "1000 GB", "Intel® Core™ i9-13900K 5.80 GHz", "Server");
console.log(server1.toString())
