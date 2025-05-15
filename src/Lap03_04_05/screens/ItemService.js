import { List,Menu,IconButton } from "react-native-paper";
import React from "react";
const ItemService = ({id,ServiceName,Price,onUpdate, onDetail}) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <List.Item
            title={ServiceName}
            titleStyle={{ fontWeight: "bold" }}
            style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 10,
                marginVertical: 6,
                margin: 8,
                backgroundColor: "#fff"
            }}
            right={props => (
                <React.Fragment>
                    <List.Subheader {...props}>
                        {Number(Price).toLocaleString()} đ
                    </List.Subheader>
                    <Menu
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                        anchor={
                            <IconButton
                                icon="dots-vertical"
                                size={20}
                                onPress={() => setVisible(true)}
                            />
                        }
                    >
                        <Menu.Item onPress={() => { setVisible(false); onUpdate(id); }} title="Update" />
                        <Menu.Item onPress={() => { setVisible(false); onDetail(id); }} title="Detail" />
                    </Menu>
                </React.Fragment>
            )}
        />
    );
}

export default ItemService;