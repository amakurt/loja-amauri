import { FlatList, StyleSheet, View } from "react-native";
import { getAllCategories } from "../../../types/services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {
    const Categorias = getAllCategories();

    return (
        <View style={styles.container}>
            <FlatList 
                data={Categorias}
                renderItem={({ item }) => <CategoryItem data={item} />} 
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }
});