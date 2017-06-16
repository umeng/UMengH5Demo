package com.umeng.hybrid;

import android.app.Application;
import com.umeng.commonsdk.UMConfigure;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        UMConfigure.init(this, "4f83c5d852701564c0000011", "Umeng", UMConfigure.DEVICE_TYPE_PHONE, null);
    }

}
