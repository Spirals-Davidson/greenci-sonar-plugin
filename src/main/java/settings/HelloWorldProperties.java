package settings;

import java.util.List;
import org.sonar.api.config.PropertyDefinition;

import static java.util.Arrays.asList;

public class HelloWorldProperties {

    public static final String HELLO_KEY = "sonar.example.hello";
    public static final String CATEGORY = "Properties Example";

    private HelloWorldProperties() {
        // only statics
    }

    public static List<PropertyDefinition> getProperties() {
        return asList(
                PropertyDefinition.builder(HELLO_KEY)
                        .name("Hello")
                        .description("Say Hello")
                        .defaultValue(String.valueOf(false))
                        .category(CATEGORY)
                        .build());
    }

}