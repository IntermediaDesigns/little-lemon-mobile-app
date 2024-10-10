import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from 'react-native-reanimated'; // Ensure this import

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: 48 }}>
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ alignItems: 'center', gap: 16, textAlign: 'center' }}>
            <Text
              role="heading"
              style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center' }}
            >
              Welcome to Project ACME
            </Text>
            <Text style={{ maxWidth: 700, fontSize: 18, textAlign: 'center', color: 'gray' }}>
              Discover and collaborate on acme. Explore our services now.
            </Text>

            <View style={{ gap: 16 }}>
              <Link
                suppressHighlighting
                style={{
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  backgroundColor: 'black',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  fontSize: 14,
                  color: 'white',
                  transition: 'background-color 0.2s',
                }}
                href="/"
              >
                Explore
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View style={{ paddingHorizontal: 16, height: 56, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Link style={{ fontWeight: 'bold', flex: 1, alignItems: 'center', justifyContent: 'center' }} href="/">
          ACME
        </Link>
        <View style={{ flexDirection: 'row', gap: 16 }}>
          <Link style={{ fontSize: 16, fontWeight: 'medium', textDecorationLine: 'underline' }} href="/">
            About
          </Link>
          <Link style={{ fontSize: 16, fontWeight: 'medium', textDecorationLine: 'underline' }} href="/">
            Product
          </Link>
          <Link style={{ fontSize: 16, fontWeight: 'medium', textDecorationLine: 'underline' }} href="/">
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{ flexShrink: 0, backgroundColor: 'gray', paddingBottom: bottom }}
    >
      <View style={{ paddingVertical: 24, flex: 1, alignItems: 'start', paddingHorizontal: 16 }}>
        <Text style={{ textAlign: 'center', color: 'gray' }}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}