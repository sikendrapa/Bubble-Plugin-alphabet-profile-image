function(instance, properties, context) {

    let firstname=properties.first_name;
    let lastname= properties.last_name;
    let letter = firstname.charAt(0);
    instance.publishState("result",letter);

    
}