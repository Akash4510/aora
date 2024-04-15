import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../../constants";
import FormField from "../../components/form-field";
import CustomButton from "../../components/cutom-button";

const SignUpScreen = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full h-full min-h-[82vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="mt-10 text-2xl text-white font-psemibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={formValues.username}
            handleChangeText={(e) =>
              setFormValues({
                ...formValues,
                email: e,
              })
            }
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={formValues.email}
            handleChangeText={(e) =>
              setFormValues({
                ...formValues,
                email: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={formValues.password}
            handleChangeText={(e) =>
              setFormValues({
                ...formValues,
                password: e,
              })
            }
            otherStyles="mt-7"
            keyboardType="password"
          />

          <CustomButton
            title="Sign up"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-400 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
