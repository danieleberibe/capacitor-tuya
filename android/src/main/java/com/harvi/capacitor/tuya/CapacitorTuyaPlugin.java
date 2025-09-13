package com.harvi.capacitor.tuya;

import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.PluginMethod;

// IMPORTA L'SDK DI TUYA
import com.tuya.smart.sdk.TuyaSdk;

@CapacitorPlugin(name = "CapacitorTuya")
public class CapacitorTuyaPlugin extends Plugin {

    @PluginMethod
    public void initTuya(PluginCall call) {
        try {
            // inizializza SDK Tuya
            TuyaSdk.init(getContext());

            Log.i("CapacitorTuya", "SDK Tuya inizializzato correttamente");

            call.resolve();
        } catch (Exception e) {
            call.reject("Errore inizializzazione Tuya SDK: " + e.getMessage());
        }
    }
}
