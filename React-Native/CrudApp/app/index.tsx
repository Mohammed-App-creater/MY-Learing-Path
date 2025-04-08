import {
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data as Todos, Todo } from "@/data/todos";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(Todos);
  const handleAddTodo = (text: string) => {
    const id = todos.length + 1;
    const newTodo = {
      id,
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  const toggleComplete = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleComplete(item.id)}>
        <Text
          style={{
            ...styles.todoText,
            ...(item.completed ? styles.todoTextCompleted : {}),
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Feather name="trash-2" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ ...styles.input, ...(todo ? styles.inputFocused : {}) }}
          placeholder="Add a new todo"
          placeholderTextColor={"#888"}
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => { if (todo.trim() !== "") { handleAddTodo(todo); } }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "#fff",
    borderRadius: 5,
  },
  inputFocused: {
    borderColor: "#007AFF",
  },
  addBtn: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  todoText: {
    fontSize: 18,
    color: "#fff",
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
