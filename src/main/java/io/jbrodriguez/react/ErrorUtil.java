package io.jbrodriguez.react;

import javax.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

/**
 * Helper class for database errors.
 */
public class ErrorUtil {
	/**
	* Create Error object to be passed back to the JS callback.
	*/
	/* package */ static WritableMap getError(@Nullable String key, String errorMessage) {
		WritableMap errorMap = Arguments.createMap();
		errorMap.putString("message", errorMessage);
		if (key != null) {
			errorMap.putString("key", key);
		}
		return errorMap;
	}

	/* package */ static WritableMap getInvalidKeyError(@Nullable String key) {
	    return getError(key, "Invalid key");
	}

	/* package */ static WritableMap getInvalidValueError(@Nullable String key) {
		return getError(key, "Invalid Value");
	}

	/* package */ static WritableMap getDBError(@Nullable String key) {
		return getError(key, "Database Error");
	}
}