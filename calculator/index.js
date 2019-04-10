const caculator = {
  num: 0,
  setNum: function (param) {
    this.num = param
    this.showNum()
  }
}

caculator.showNum = function () {
  document.querySelector(".num-container").innerHTML = this.num
}

caculator.btn_c = function () {
  this.setNum(0)
}

caculator.btn_7 = function () {
  this.setNum(7)
}
caculator.btn_8 = function () {
  this.setNum(8)
}
caculator.btn_9 = function () {
  this.setNum(9)
}
caculator.btn_4 = function () {
  this.setNum(4)
}
caculator.btn_5 = function () {
  this.setNum(5)
}
caculator.btn_6 = function () {
  this.setNum(6)
}
caculator.btn_1 = function () {
  this.setNum(1)
}
caculator.btn_2 = function () {
  this.setNum(2)
}
caculator.btn_3 = function () {
  this.setNum(3)
}
caculator.btn_0 = function () {
  this.setNum(0)
}