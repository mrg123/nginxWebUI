package com.cym.test;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import com.cym.NginxWebUI;
import com.cym.model.MonitorInfo;
import com.cym.service.MonitorService;

import cn.craccd.sqlHelper.utils.SqlHelper;

@SpringBootTest(classes = NginxWebUI.class)
public class MainTest {
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	SqlHelper sqlHelper;
	@Value("${project.version}")
	String version;
	@Autowired
	MonitorService monitorService;

	@BeforeAll
	static void before() {
		System.out.println("--------------测试开始----------");
	}

	@Test
	public void testStartUp() throws InterruptedException {
		
	}

	@AfterAll
	static void after() {
		System.out.println("--------------测试结束----------");
	}

}
