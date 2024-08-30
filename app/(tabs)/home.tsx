import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../types/services/product";
import { ProductItem } from "../../components/product-item";

export default function Screen () {

    const products = getAllProducts();

    return (
        <View style={style.container}>
            <FlatList 
                data={products}
                renderItem={({ item}) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={style.list}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
});