package com.harvi.capacitor.tuya;

import android.util.Log;

public class TuyaPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }

    public void init() {
        Log.i("TuyaPlugin", "TuyaPlugin initialized");
    }
}
