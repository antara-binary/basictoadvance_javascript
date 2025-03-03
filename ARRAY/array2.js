const arr1=["antara","debroy","coder"]
const arr2=["i","am","procoder"]
arr1.push(arr2)
console.log(arr1)//[ 'antara', 'debroy', 'coder', [ 'i', 'am', 'procoder' ] ] //insert arr2 array as 4th element of arr1
arr1.concat(arr2)
console.log(arr1)//[ 'antara', 'debroy', 'coder', [ 'i', 'am', 'procoder' ] ]//same arr print korle push er motony output hbe
const totalvalue=arr1.concat(arr2)
console.log(totalvalue)//[ 'antara', 'debroy', 'coder', 'i', 'am', 'procoder' ] notun value te store korle emni hbe

const all_data=[...arr1,...arr2]//[ 'antara', 'debroy', 'coder', 'i', 'am', 'procoder' ]
console.log(all_data)

const anotherarr=[1,2,3, [4,5,6] ,7, [6,7 , [4,5] ]]
const real_another_arr=anotherarr.flat(Infinity)
console.log(real_another_arr)
//****[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
//] */


