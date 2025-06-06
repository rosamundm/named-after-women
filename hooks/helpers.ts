const mapSnakeCaseToCamelCase = (
    listInSnakeCase: any
) => {
    listInSnakeCase.map((item: any) => ({
        itemInCamel: item.item_in_camel
    })) || []
}