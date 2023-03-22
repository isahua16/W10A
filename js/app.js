function simple_arithmetic(number_1, number_2)
{
    let result = (number_1 + number_2) * 5;
    return result;
}

let my_result = simple_arithmetic(4, 9);
let my_result1 = simple_arithmetic(10, 23);
let my_result2 = simple_arithmetic(345, 54);

console.log(my_result, my_result1, my_result2);

function find_string_length (str)
{
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

function starts_with_ph (arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].startsWith(`ph`))
        {
            return true;
        }
    }
    return false;
}

let my_friends = [`ross`, `rachel`, `chandler`, `joey`];

let i_remembered_phoebe = starts_with_ph(my_friends);

console.log(i_remembered_phoebe);