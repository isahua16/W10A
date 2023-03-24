
//This function takes 2 numbers as arguments.
function simple_arithmetic(number_1, number_2)
{
    //It will do simple arithmetics on those numbers
    let result = (number_1 + number_2) * 5;
    //Return that number which is being stored into variables below
    return result;
}

let my_result = simple_arithmetic(4, 9);
let my_result1 = simple_arithmetic(10, 23);
let my_result2 = simple_arithmetic(345, 54);

console.log(my_result, my_result1, my_result2);


//This function takes a string as an argument
function find_string_length (str)
{
    //This conditional checks if the string(an array) has more than 10 characters and return true or false
    if(str.length > 10)
    {
        return true;
    } else
    {
        return false;
    }
}

let is_more_than_ten_char = find_string_length(`xqjcwfb`);
let is_more_than_ten_char_1 = find_string_length(`lmnoyzabcd`);
let is_more_than_ten_char_2 = find_string_length(`pqrstuvwxyza`);

console.log(is_more_than_ten_char, is_more_than_ten_char_1, is_more_than_ten_char_2);

//This function takes an array of strings.
function starts_with_ph (arr)
{
    //For each element in the array, check if it starts with 'ph'.
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].startsWith(`ph`))
        {
            //If one of the elements starts with ph, return that element
            return arr[i];
        }
    }
    //If no element start with ph, return the original array
    return arr;
}

let my_friends = [`ross`, `rachel`, `chandler`, `joey`];

let my_best_friend = starts_with_ph(my_friends);

console.log(my_best_friend);